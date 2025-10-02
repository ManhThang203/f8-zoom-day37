/* eslint-disable no-unused-vars */
import Loading from "@/components/Loading";

function withLoading(Component) {
  const WrappedComponent = ({ isLoading }) => {
    console.log(isLoading);
    if (isLoading) {
      return <Loading />;
    }
    return <Component />;
  };
  return WrappedComponent;
}
export default withLoading;
