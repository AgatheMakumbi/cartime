export function ProfilePage() {
  const notificationTags = ['Weekly drop digest']

  const accountDetails = [
    { label: 'City', value: 'Lausanne, Switzerland' },
    { label: 'Driving style', value: 'Sporty daily driver' },
    { label: 'Membership', value: 'Premium · since 2022' },
  ]

  const favoriteBrands = ['Audi', 'BMW']

  return (
    <section className="profile-shell">
      <div className="page-heading">
        <p className="eyebrow">Member space</p>
        <h1>Profile</h1>
      </div>

      <div className="profile-card profile-hero">
        <div className="profile-id">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
            alt=""
            className="profile-avatar"
          />
          <p className="profile-name">Vera Sierro Martín</p>
          <p className="profile-meta">Premium member · Collection sync active</p>
        </div>
        <div className="profile-actions">
          <button className="secondary-button">Update password</button>
          <button className="primary-button">Edit my information</button>
        </div>
      </div>

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
            {favoriteBrands.map((brand) => (
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

      </div>
    </section>
  )
}

