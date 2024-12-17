import { InvertedContext, InvertedProvider } from "../context/inverted-context";
import useTypedContext from "./useTypedContext";

export const useInverted = () =>
    useTypedContext(InvertedContext, {
        context: useInverted.name,
        provider: InvertedProvider.name
    });