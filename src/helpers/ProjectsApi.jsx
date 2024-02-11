const ProjectsApi = ({ projects }) => {
	return (
		<>
			{projects.map((project) => (
				<div className="card" key={project.id}>
					{project.name &&<h3>{project.name}</h3>}
					<div className="img-cnt">
						<img loading="lazy" className="img-py" src={project.img} alt={project.name} />
						{project.img2 && <img loading="lazy" className="img-py2" src={project.img2} alt={project.name} />}
					</div>
					{project.desc &&<p>{project.desc}</p>}
				</div>
			))}
		</>
	);
};

export default ProjectsApi