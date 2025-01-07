import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type EndpointType = "POST" | "PUT" | "PATCH" | "GET" | "DELETE";

export interface Endpoint {
    name: string;
    type: EndpointType;
    url: string;
    requestData: object;
    responseData: object;
}

export interface EndpointsGroup {
    name: string;
    url: string;
    endpoints: (Endpoint | EndpointsGroup)[];
}

export interface EndpointModifier {
    label: string;
    color: string;
    description: string
}

export interface APIDefinition {
    name: string;
    baseUrl: string;
    endpointModifiers: EndpointModifier[];
    endpoints: (Endpoint | EndpointsGroup)[];
}

export interface APIStore {
    apiDefinitions: APIDefinition[];
    addAPIDefinition: (newDefinition: string) => void;
    removeAPIDefinition: (index: number) => void;
    addEndpointModifier: (apiIndex: number, identifier: string, color: string, description: string) => void;
    getEndpointModifiers: (apiIndex: number) => EndpointModifier[]
    removeEndpointModifier: (apiIndex: number, modifierIndex: number) => void;
}

export const useAPIStore = create<APIStore>()(
    persist(
        (set, get) => ({
            apiDefinitions: [],
            addAPIDefinition: (newDefinition: string) => {
                const definition: APIDefinition = {
                    name: newDefinition,
                    baseUrl: "https://placeholder.url/",
                    endpointModifiers: [],
                    endpoints: []
                }
                set({ apiDefinitions: [definition, ...get().apiDefinitions] })
            },
            removeAPIDefinition: (index: number) => {
                const definitions = get().apiDefinitions;
                const updatedDefinitions = definitions.filter((_, i) => i !== index)
                set({ apiDefinitions: updatedDefinitions })
            },
            addEndpointModifier: (apiIndex: number, identifier: string, color: string, description: string) => {

                const apis = get().apiDefinitions;
                set({
                    apiDefinitions: apis.map((api, index): APIDefinition => {
                        return index === apiIndex ? {
                            ...api,
                            endpointModifiers: [...api.endpointModifiers, {
                                label: identifier,
                                color: color,
                                description: description
                            }]
                        } : api;
                    })
                });

            },
            getEndpointModifiers: (apiIndex: number) => {
                return get().apiDefinitions[apiIndex].endpointModifiers;
            },
            removeEndpointModifier: (apiIndex: number, modifierIndex: number) => {

            }
        }),
        {
            name: 'food-storage', // name of the item in the storage (must be unique)
        }
    )
)