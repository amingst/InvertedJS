import { InvertedContext, InvertedProvider } from '@/context';
import useTypedContext from './useTypedContext';

const useInverted = () =>
	useTypedContext(InvertedContext, {
		context: useInverted.name,
		provider: InvertedProvider.name,
	});

export default useInverted;
