import { Activity } from "../../graphql/graphql.types";

export const GET_ACTIVITIES = '[Activity] Get Activities';
export const GET_ACTIVITIES_SUCCESS = '[Activity] Get Activities Success';
export const GET_ACTIVITIES_FAILURE = '[Activity] Get Activities Failure';

export const CREATE_ACTIVITY = '[Activity] Create Activity';
export const CREATE_ACTIVITY_SUCCESS = '[Activity] Create Activity Success';
export const CREATE_ACTIVITY_FAILURE = '[Activity] Create Activity Failure';

export const getActivities = (accessToken: string) => ({
  type: GET_ACTIVITIES,
  payload: accessToken
})

export const getActivitiesSuccess = (activities: Activity[]) => ({
  type: GET_ACTIVITIES_SUCCESS,
  payload: activities
})

export const getActivitiesFailure = (error: string) => ({
  type: GET_ACTIVITIES_FAILURE,
  payload: error
})

interface CreateActivityPayload {
  accessToken: any,
  description: string,
  fundAmt: number,
  positive: boolean
}

export const createActivity = (payload: CreateActivityPayload) => ({
  type: CREATE_ACTIVITY,
  payload
})

export const createActivitySuccess = (activities: Activity[]) => ({
  type: CREATE_ACTIVITY_SUCCESS,
  payload: activities
})

export const createActivityFailure = (error: string) => ({
  type: CREATE_ACTIVITY_FAILURE,
  payload: error
})