import { getExpenses } from "@/src/services/expenses";

const expenses = await getExpenses();

export default function Home() {
  return (
    <div>
      <div>
        {expenses?.map(exp => (
          <p key={exp.id}>{exp.description}</p>
        ))}
      </div>
    </div>
  );
}
