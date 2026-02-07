import { getExpenses } from "@/src/services/expenses";

const expenses = await getExpenses();

export default function Home() {
  return (
    <div>
      {expenses?.map(exp => (<p key={exp.id}>{exp.title}</p>))}
    </div>
  );
}
