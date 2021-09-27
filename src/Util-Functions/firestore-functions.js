import { auth } from './config';

export async function signIn(email, password) {

    console.log('trying to sign in...')
  
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      if (err)
      {
        console.log(err);
        return err.message;
      } 
    }
}