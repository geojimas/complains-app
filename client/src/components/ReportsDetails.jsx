import { useParams } from 'react-router';

export default function ReportDetail() {
  const { id } = useParams();
  return <div>Report detail for: {id}</div>;
}
