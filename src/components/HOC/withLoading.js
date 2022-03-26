
export const withLoading = (WrappedComponent) => {
  return function({isLoading}) {
    return (
      <>
        {
          isLoading 
          ? <p>Esta cargando</p> 
          : <WrappedComponent />
        }
      </>
    )
  }
}