const mapping: Record<string, string> = {
  'astronomy-experts': 'astronomy_expert',
  'data-analysts': 'data_analyst',
  'data-models': 'data_model',
  'moon-movements': 'moon_movement',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
