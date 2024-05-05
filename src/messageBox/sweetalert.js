import Swal from 'sweetalert2'

export default {
    error(err) {
        Swal.fire({
            title: 'Error!',
            text: err,
            icon: 'error',
            confirmButtonText: 'Cancel'
        })
    },
    welcome(name) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Hoşgeldiniz",
            showConfirmButton: false,
            timer: 1500
        });
    },
    success() {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Notunuz kaydedildi",
            showConfirmButton: false,
            timer: 2000
        });
    },
    deleteConfirmation() {
        return new Promise((resolve) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                resolve(result);
            });
        });
    },
    deleted() {
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
    }
}
