import { useState } from 'react'
import { profile } from '../data.js'

// Affiche /public/photo.jpg. Tant que la photo n'est pas ajoutée, les initiales prennent sa place.
export default function Photo() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="photo">
      {failed ? (
        <span className="photo-fallback" aria-label={profile.fullName}>
          {profile.firstName[0]}{profile.lastName[0]}
        </span>
      ) : (
        <img src={profile.photo} alt={`Portrait de ${profile.fullName}`} width="800" height="800" onError={() => setFailed(true)} />
      )}
      <span className="photo-dot" title="Disponible" />
    </div>
  )
}
