
   
  export default async function Dashboard() {
    
    const res = await fetch(`http://localhost:5000/getusers`)
    const projects = await res.json()
    return (
     <div>
       <ul>
        {projects.map((project:any) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
     </div>
    )
  }