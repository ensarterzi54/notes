import Swal from 'sweetalert2'
import i18next from '../i18n'

export default {
    error(err) {
        Swal.fire({
            title: i18next.t('Error!'),
            text: err,
            icon: 'error',
            confirmButtonText: 'Cancel'
        })
    },
    welcome(name) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: i18next.t('Welcome'),
            showConfirmButton: false,
            timer: 1500
        });
    },
    success() {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: i18next.t('Save Note'),
            showConfirmButton: false,
            timer: 2000
        });
    },
    deleteConfirmation() {
        return new Promise((resolve) => {
            Swal.fire({
                title: i18next.t('Are you sure?'),
                text: i18next.t("You won't be able to revert this!"),
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: i18next.t('Yes')
            }).then((result) => {
                resolve(result);
            });
        });
    },
    deleted() {
        Swal.fire({
            title: i18next.t('Deleted'),
            text: i18next.t('Your file has been deleted.'),
            icon: "success"
        });
    }
}
