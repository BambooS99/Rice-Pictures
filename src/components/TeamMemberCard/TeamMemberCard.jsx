import { motion } from 'framer-motion';
import './TeamMemberCard.css';

export default function TeamMemberCard({ name, role, imageSrc, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1 }}
      className="team-card"
    >
      <div className="team-card__image-wrapper">
        <img
          src={imageSrc}
          alt={name}
          className="team-card__image"
        />
      </div>
      <h4 className="team-card__name">{name}</h4>
      <p className="team-card__role">{role}</p>
    </motion.div>
  );
}
