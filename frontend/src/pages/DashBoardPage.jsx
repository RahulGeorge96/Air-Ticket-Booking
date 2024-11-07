
import BookingList from "../components/BookingList";

const DashboardPage = ({ token }) => {
  return (
    <div>
      <h1>Your Bookings</h1>
      <BookingList token={token} />
    </div>
  );
};

export default DashboardPage;
