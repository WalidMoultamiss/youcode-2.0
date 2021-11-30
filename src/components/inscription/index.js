//import btn
import { btn } from '../../components';

export const inscription = () => {
  return `
            <div class="container">
                <div class="form-signin p-3 gap-2 flex flex-col w-96 rounded-lg shadow-md">
                    <h1 class="h3 mb-3 font-weight-normal">Inscription</h1>
                    <div class="form-label-group">
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input type="email" id="inputEmail" class="form-control p-2 shadow-md w-[80%] rounded-md outline-none" placeholder="Email address" required autofocus>
                    </div>
                    <div class="form-label-group">
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control p-2 shadow-md w-[80%] rounded-md outline-none" placeholder="Password" required>
                    </div>
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div>
                    ${btn('sign in','p-3 rounded-lg')}
                    <p class="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
                </div>
            </div>
            `;
};
