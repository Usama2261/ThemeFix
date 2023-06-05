import { ToastrService } from "ngx-toastr";
import { AppModule } from "src/app/app.module"
import { environment } from "src/environments/environment";

export const handleApiFailure = (
  error: any,
  logToConsole: boolean = false,
  showToast: boolean = false
) => {
  if (showToast) {
    AppModule.injector.get(ToastrService).error(error.message);
  }
  if (logToConsole && !environment.production) {
    console.log(error.message)
  }
}

export const handleApiSuccess = (
  message: string,
  showToast: boolean = false
) => {
  if (showToast) {
    AppModule.injector.get(ToastrService).success(message);
  }
}

export interface ApiState {
  isFetching: boolean;
  isRetrieving: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  isDeleting: boolean;

  fetchingSuccessful?: boolean;
  retrievingSuccessful?: boolean;
  creatingSuccessful?: boolean;
  updatingSuccessful?: boolean;
  deletingSuccessful?: boolean;

  fetchingError?: any;
  retrievingError?: any;
  creatingError?: any;
  updatingError?: any;
  deletingError?: any;
}

export const initialApiState: ApiState = {
  isFetching: false,
  isRetrieving: false,
  isCreating: false,
  isUpdating: false,
  isDeleting: false,
}
