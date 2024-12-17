import React, { useContext } from 'react';

export type ContextWrapperConfig = {
	context: string;
	provider: string;
};

const useTypedContext = <T>(
	context: React.Context<T>,
	config: ContextWrapperConfig
) => {
	const ctx = useContext(context);
	const { context: contextName, provider: providerName } = config;

	if (!ctx) {
		throw new Error(
			`${contextName} must only be called within the bounds of the provider ${providerName}`
		);
	}

	return ctx;
};

export default useTypedContext;
