import { Link } from 'react-router-dom'

type AuthPageProps = {
  mode: 'login' | 'signup'
}

export function AuthPage({ mode }: AuthPageProps) {
  const isSignup = mode === 'signup'
  return (
    <section className="auth-shell">
      <form className="auth-card">
        <p className="eyebrow">Access</p>
        <h1>{isSignup ? 'Sign up' : 'Login'}</h1>
        <label>
          <span>Email</span>
          <input type="email" placeholder="driver@cartime.app" required />
        </label>
        <label>
          <span>Password</span>
          <input type="password" placeholder="••••••••" required />
        </label>
        {isSignup && (
          <label>
            <span>Confirm password</span>
            <input type="password" placeholder="••••••••" required />
          </label>
        )}
        <button type="submit" className="primary-button full">
          {isSignup ? 'Create account' : 'Enter garage'}
        </button>
        <p className="auth-switch">
          {isSignup ? 'Already registered?' : 'New here?'}{' '}
          <Link to={isSignup ? '/login' : '/signup'}>
            {isSignup ? 'Login' : 'Create an account'}
          </Link>
        </p>
      </form>
    </section>
  )
}

