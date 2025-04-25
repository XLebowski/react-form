// import React from 'react'
import { observer } from 'mobx-react-lite';
import counter from './Store/counter';
import FormMobx from './FormMobx';

const Mobx = observer(function MobxComponent() {
    return (
        <section className='mobx-section'>
            <div className='mobx-content'>Счетчик: {counter.count}</div>
            <div className='mobx-button'>
                <button className='btn' onClick={() => counter.increment()}>
                    +
                </button>
                <button className='btn' onClick={() => counter.decrement()}>
                    -
                </button>
            </div>
            <FormMobx/>
        </section>
    );
});

export default Mobx;
