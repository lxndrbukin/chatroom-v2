import './assets/styles.scss';
import RoomsGridItem from './RoomsGridItem';

export default function RoomsGrid(): JSX.Element {
  return (
    <div className="rooms-grid">
      <RoomsGridItem />
      <RoomsGridItem />
      <RoomsGridItem />
      <RoomsGridItem />
      <RoomsGridItem />
      <RoomsGridItem />
    </div>
  );
}
