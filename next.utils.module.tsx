// @ts-nocheck
import "./__MODULENAME__.scss";

// Se o módulo for ter alguma informação estática pegar aqui.
// async function getData() {
//     return {}
// }

const __MODULENAME__ = async ({
  fields,
  order,
}: /* @ts-expect-error Async Server Component */
ModuleProps): React.ReactElement => {
  // const data = await getData(uri, locale)
  return <></>;
};

export { __MODULENAME__ };
