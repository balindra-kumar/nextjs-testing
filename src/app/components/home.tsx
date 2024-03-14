export async function HomePage({ jsonData }: any){
    return (
      <div>
        <ul>
          {jsonData &&
            jsonData.map((e: any) => {
              return <li key={e.id}>{e.name}</li>;
            })}
        </ul>
      </div>
    );
  };
  
  export async function getServerSideProps(context: any) {
    const res = await fetch("http://localhost:5000/getusers");
    const jsonData = await res.json();
    return {
      props: {
        jsonData,
      },
    };
  }
  