import { FeedProvider } from "../contexts/FeedContext";

const FeedLayout = ({ children }: { children: React.ReactNode }) => {
  return <FeedProvider>{children}</FeedProvider>;
};

export default FeedLayout;
