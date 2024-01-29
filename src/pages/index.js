import { Button } from '@nextui-org/react';
import DisplayClicks from '@/components/DisplayClicks';

import { useCountStore } from '@/store/zustand';
import { buttonCount } from '@/utils/globals';

export default function Home () {
  const increaseClickCount = useCountStore(state => state.add);
  return (
    <div className='h-full'>
      {[...Array(buttonCount).keys()].map((i) => (
        <Button key={i} className='mt-5 mb-2 ml-5' color='primary' variant='ghost' radius='sm' onClick={() => increaseClickCount(i)}>
          Click me #{i + 1}
        </Button>
      )
      )}
      <DisplayClicks />
    </div>
  );
}
