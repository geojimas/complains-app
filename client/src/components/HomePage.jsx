import { Link } from 'react-router';

export default function HomePage() {
  return (
    <div>
      Public Home Page
      <br />
      Report Here!
      <br />
      <Link to="/reports">Report</Link>
    </div>
  );
}
