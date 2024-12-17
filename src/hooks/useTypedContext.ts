import React, { useContext } from 'react';

export interface IContextWrapperConfig {
    context: string;
    provider: string;
}

const useTypedContext = <T,>(
    context: React.Context<T>,
    config: IContextWrapperConfig
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
