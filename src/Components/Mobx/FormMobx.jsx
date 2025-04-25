import { observer } from 'mobx-react-lite';
import formvalue from './Store/FormStore';
// import { useEffect } from 'react';
// import { useGetUsersQuery } from '../../api/UserApi';

const FormMobx = observer(function FormMobxState() {
    // useEffect(() => {
    //     console.log(formvalue.users);
    // }, [formvalue.users]);
    return (
        <>
            <form className='form-mobx'>
                <label className='serch-label-mobx'>
                    ченить писать здесь
                    <input
                        type='text'
                        className='searh-input-mobx'
                        value={formvalue.value}
                        onChange={(evt) =>
                            formvalue.updateValue(evt.target.value)
                        }
                    />
                </label>
                <button type='button' onClick={() => formvalue.updateUsers()}>
                    нажми нежно
                </button>
            </form>
            <div className='users-mobx-box'>
                {formvalue.users.length !== 0 && formvalue.users.map((user) => (
                    <div key={user.id} className='user-mobx'>
                        <h3>{user.name}</h3>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </>
    );
});

export default FormMobx;
