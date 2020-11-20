export interface IUserData {
  user_id?: number
  email?: string
}

export interface IVizData {
  org_id: number
  project_id: number
  project_name: string
  viz_type: 'dashboard' | 'display'
  viz_id: number
  viz_name: string
  sub_viz_id: number
  sub_viz_name: string
}

export interface IOperation extends IUserData, IVizData {
  id?: number
  action: 'login' | 'visit' | 'initial' | 'sync' | 'search' | 'linkage' | 'drill' | 'download' | 'print'
  create_time: string
}

export interface IDuration extends IUserData, IVizData {
  id?: number
  start_time: string
  end_time: string
}

export interface ITerminal extends IUserData {
  id?: number
  browser_name: string
  browser_version: string
  engine_name: string
  engine_version: string
  os_name: string
  os_version: string
  device_model: string
  device_type: string
  device_vendor: string
  cpu_architecture: string
  create_time: string
}

