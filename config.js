// ============================================================
// CHL — Centre Hospitalier de Liège
// Configuration Supabase — NE PAS EXPOSER PUBLIQUEMENT
// ============================================================

const CHL_CONFIG = {
  supabase: {
    url:  'https://sevrfgivcpefyykuffti.supabase.co',
    anon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNldnJmZ2l2Y3BlZnl5a3VmZnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NDI1NTMsImV4cCI6MjA3ODUxODU1M30.YZnkSHsVWKQEhfU7xYfWyTFmtkM28Zuzdu7Y1sjBXQc'
  },
  app: {
    name:    'CHL — Centre Hospitalier de Liège',
    version: '1.0.0',
    locale:  'fr-BE'
  },
  security: {
    maxLoginAttempts:    5,
    lockoutDurationMs:   15 * 60 * 1000,   // 15 minutes
    sessionTimeoutMs:    60 * 60 * 1000,   // 1 heure
    sessionWarningMs:    5 * 60 * 1000,    // 5 min avant expiration
    inactivityTimeoutMs: 5 * 60 * 1000,    // 5 minutes
    inactivityWarningMs: 30 * 1000,        // 30 sec avant déco
    minPasswordLength:   8
  }
};
