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
        }),
        {
            name: 'food-storage', // name of the item in the storage (must be unique)
        }
    )
)