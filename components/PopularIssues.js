const issues = [
  { title: "Routing in Next.js", description: "Learn how to set up and use Next.js routing" },
  { title: "API Routes", description: "Creating and using API routes in Next.js" },
  { title: "Static Site Generation", description: "Implementing SSG in Next.js applications" },
];

export default function PopularIssues() {
  return (
    <section className="max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">Popular Issues</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {issues.map((issue, index) => (
          <div key={index} className="border p-4 rounded-md hover:shadow-md transition-shadow">
            <h3 className="font-semibold">{issue.title}</h3>
            <p className="text-gray-600">{issue.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}