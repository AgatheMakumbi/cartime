import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { authStore } from '../utils/authStore'
import type { User } from '../utils/authStore'

export function ProfilePage() {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(authStore.getCurrentUser())
  const [isEditingInfo, setIsEditingInfo] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [editedCity, setEditedCity] = useState('')
  const [editedDrivingStyle, setEditedDrivingStyle] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [message, setMessage] = useState('')
  const notificationTags = ['Weekly drop digest']

  useEffect(() => {
    const handleAuthChange = () => {
      setUser(authStore.getCurrentUser())
    }

    window.addEventListener('auth-changed', handleAuthChange)
    return () => window.removeEventListener('auth-changed', handleAuthChange)
  }, [])

  useEffect(() => {
    if (user) {
      setEditedCity(user.city)
      setEditedDrivingStyle(user.drivingStyle)
    }
  }, [user])

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      authStore.logout()
      navigate('/login')
    }
  }

  const handleUpdatePassword = () => {
    setMessage('')
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setMessage('Please fill all password fields')
      return
    }
    if (currentPassword !== '12345') {
      setMessage('Current password is incorrect')
      return
    }
    if (newPassword !== confirmNewPassword) {
      setMessage('New passwords do not match')
      return
    }
    if (newPassword.length < 5) {
      setMessage('Password must be at least 5 characters')
      return
    }
    // Simulation de mise à jour
    setMessage('Password updated successfully!')
    setCurrentPassword('')
    setNewPassword('')
    setConfirmNewPassword('')
    setTimeout(() => {
      setIsChangingPassword(false)
      setMessage('')
    }, 2000)
  }

  const handleUpdateInfo = () => {
    if (!editedCity.trim() || !editedDrivingStyle.trim()) {
      setMessage('Please fill all fields')
      return
    }
    // Simulation de mise à jour des infos
    setMessage('Information updated successfully!')
    setTimeout(() => {
      setIsEditingInfo(false)
      setMessage('')
    }, 2000)
  }

  // Rediriger vers login si non connecté
  if (!user) {
    return <Navigate to="/login" replace />
  }

  const accountDetails = [
    { label: 'City', value: user.city },
    { label: 'Driving style', value: user.drivingStyle },
    { label: 'Membership', value: user.membership },
  ]

  return (
    <section className="profile-shell">
      <div className="page-heading">
        <p className="eyebrow">Member space</p>
        <h1>Profile</h1>
      </div>

      <div className="profile-card profile-hero">
        <div className="profile-id">
          <img
            src={user.avatar}
            alt={user.name}
            className="profile-avatar"
          />
          <p className="profile-name">{user.name}</p>
          <p className="profile-meta">Premium member · Collection sync active</p>
        </div>
        <div className="profile-actions">
          <button 
            className="secondary-button"
            onClick={() => {
              setIsChangingPassword(!isChangingPassword)
              setIsEditingInfo(false)
              setMessage('')
            }}
          >
            Update password
          </button>
          <button 
            className="primary-button"
            onClick={() => {
              setIsEditingInfo(!isEditingInfo)
              setIsChangingPassword(false)
              setMessage('')
            }}
          >
            Edit my information
          </button>
        </div>
      </div>

      {message && (
        <div className={`profile-message ${message.includes('success') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      {isChangingPassword && (
        <div className="profile-card">
          <h2>Update Password</h2>
          <div className="profile-form">
            <label>
              <span>Current password</span>
              <input
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </label>
            <label>
              <span>New password</span>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <label>
              <span>Confirm new password</span>
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </label>
            <div className="profile-form-actions">
              <button className="secondary-button" onClick={() => setIsChangingPassword(false)}>
                Cancel
              </button>
              <button className="primary-button" onClick={handleUpdatePassword}>
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditingInfo && (
        <div className="profile-card">
          <h2>Edit Information</h2>
          <div className="profile-form">
            <label>
              <span>City</span>
              <input
                type="text"
                placeholder="Enter your city"
                value={editedCity}
                onChange={(e) => setEditedCity(e.target.value)}
              />
            </label>
            <label>
              <span>Driving style</span>
              <input
                type="text"
                placeholder="Enter your driving style"
                value={editedDrivingStyle}
                onChange={(e) => setEditedDrivingStyle(e.target.value)}
              />
            </label>
            <div className="profile-form-actions">
              <button className="secondary-button" onClick={() => setIsEditingInfo(false)}>
                Cancel
              </button>
              <button className="primary-button" onClick={handleUpdateInfo}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="profile-grid">
        <article className="profile-panel compact">
          <h2>Details</h2>
          <dl className="profile-stats">
            {accountDetails.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className="profile-panel compact">
          <h2>Favorite car brands</h2>
          <div className="chip-list">
            {user.favoriteBrands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </article>

        <article className="profile-panel compact">
          <h2>Notifications</h2>
          <div className="chip-list">
            {notificationTags.map((pref) => (
              <span key={pref}>{pref}</span>
            ))}
          </div>
        </article>

        <article className="profile-panel wide">
          <h2>Account actions</h2>
          <div className="profile-actions-list">
            <button className="logout-button" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </article>

      </div>
    </section>
  )
}

