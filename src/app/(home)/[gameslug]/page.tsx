import { getGameUrl } from "@/lib/action";


const page = async ({ params }: any) => {
  const url = await getGameUrl(params?.gameslug);
    return (
      <iframe
        src={url?.data}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    );
  };
  
  export default page;