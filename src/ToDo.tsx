import { useQuery } from '@tanstack/react-query';

const API_ENDPOINT = `https://jsonplaceholder.typicode.com`;

export const Todo = () => {
  const { data } = useQuery({
    queryKey: [`${API_ENDPOINT}/todos`],
    queryFn: () => fetch(`${API_ENDPOINT}/todos`).then((res) => res.json()),
  });
  console.log(data);
  return (
    <div>
      {(data || []).map((item) => (
        <div key={item.id}>
          <h4 style={{ lineHeight: '100%', marginBottom: 0 }}>{item.title}</h4>
          <p>{item.completed ? 'Done' : 'Not Done Yet'}</p>
        </div>
      ))}
    </div>
  );
};
