import { useCountStore } from '@/store/zustand';
import { buttonCount } from '@/utils/globals';

export default function DisplayClicks () {
  const count = useCountStore(state => state.count);

  return (
    <div>
      <p>Total: {count.getCount()} times</p>
      <br />
      {[...Array(buttonCount).keys()].map((i) => {
        return (
          <p key={i}>Clicks on button #{i + 1}: {count.getCount(i)}</p>
        );
      })}
    </div>
  );
}
