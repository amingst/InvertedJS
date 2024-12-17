import React, { createContext, useMemo } from 'react';
import { InvertedClient } from '../client/InvertedClient';

export interface IInvertedContext {
	client: InvertedClient;
}

export type ContextProviderProps = React.PropsWithChildren<{
	baseUrl: string;
	token?: string;
}>;

export const InvertedContext = createContext<IInvertedContext | undefined>(
	undefined
);

export const InvertedProvider = ({
	children,
	baseUrl,
	token,
}: ContextProviderProps) => {
	const client: InvertedClient = new InvertedClient(baseUrl, token);

	const context = useMemo(
		() => ({
			client,
		}),
		[]
	);

	return (
		<InvertedContext.Provider value={context}>
			{children}
		</InvertedContext.Provider>
	);
};
