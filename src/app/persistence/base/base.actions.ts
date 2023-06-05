import { createAction, props } from "@ngrx/store"

export const createApiAction = <Model>(pluralModel: string) => {
  const clear = createAction(
    `[${pluralModel} State] Clear ${pluralModel}`
  )

  const get = createAction(
    `[${pluralModel} API] Get ${pluralModel}`
  )

  const getSuccess = createAction(
    `[${pluralModel} API] Get ${pluralModel} Success`,
    props<{ items: Model[] }>()
  )

  const getFailure = createAction(
    `[${pluralModel} API] Get ${pluralModel} Failure`,
    props<{ error: any }>()
  )

  const show = createAction(
    `[${pluralModel} API] Show ${pluralModel}`,
    props<{ id: string }>()
  )

  const showSuccess = createAction(
    `[${pluralModel} API] Show ${pluralModel} Success`,
    props<{ item: Model }>()
  )

  const showFailure = createAction(
    `[${pluralModel} API] Show ${pluralModel} Failure`,
    props<{ error: any }>()
  )

  const store = createAction(
    `[${pluralModel} API] Store ${pluralModel}`,
    props<{ item: Model }>()
  )

  const storeSuccess = createAction(
    `[${pluralModel} API] Store ${pluralModel} Success`,
    props<{ item: Model }>()
  )

  const storeFailure = createAction(
    `[${pluralModel} API] Store ${pluralModel} Failure`,
    props<{ error: any }>()
  )

  const update = createAction(
    `[${pluralModel} API] Update ${pluralModel}`,
    props<{ item: Model|any }>()
  )

  const updateSuccess = createAction(
    `[${pluralModel} API] Update ${pluralModel} Success`,
    props<{ item: Model }>()
  )

  const updateFailure = createAction(
    `[${pluralModel} API] Update ${pluralModel} Failure`,
    props<{ error: any }>()
  )

  const deleteItem = createAction(
    `[${pluralModel} API] Delete ${pluralModel}`,
    props<{ id: string }>()
  )

  const deleteItemSuccess = createAction(
    `[${pluralModel} API] Delete ${pluralModel} Success`,
    props<{ id: string }>()
  )

  const deleteItemFailure = createAction(
    `[${pluralModel} API] Delete ${pluralModel} Failure`,
    props<{ error: any }>()
  )

  return {
    clear,
    get,
    getSuccess,
    getFailure,
    show,
    showSuccess,
    showFailure,
    store,
    storeSuccess,
    storeFailure,
    update,
    updateSuccess,
    updateFailure,
    deleteItem,
    deleteItemSuccess,
    deleteItemFailure
  }
}
