        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('main-nav');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const commanderButtons = document.querySelectorAll('.commander-btn');
            const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
            const modalText = document.getElementById('modal-text');
            const confirmOrderBtn = document.getElementById('confirm-order-btn');
            const customerAddressInput = document.getElementById('customer-address');
            const customerEmailInput = document.getElementById('customer-email');

            let currentOrder = {};

            commanderButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const cardBody = event.target.closest('.card-body');
                    if (cardBody) {
                        const dishName = cardBody.querySelector('.card-title').textContent;
                        const dishPrice = cardBody.querySelector('.price').textContent;
                        
                        modalText.textContent = `Voulez-vous vraiment commander "${dishName}" pour ${dishPrice} ?`;
                        
                        customerAddressInput.value = '';
                        customerEmailInput.value = '';
                        
                        currentOrder = { name: dishName, price: dishPrice };

                        orderModal.show();
                    }
                });
            });

            confirmOrderBtn.addEventListener('click', () => {
                const customerAddress = customerAddressInput.value;
                const customerEmail = customerEmailInput.value;
                
                if (customerAddress.trim() === '' || customerEmail.trim() === '') {
                    modalText.textContent = 'Veuillez entrer votre adresse de livraison et votre adresse email.';
                    return;
                }

                currentOrder.address = customerAddress;
                currentOrder.email = customerEmail;
                
                console.log('Commande confirmée :', currentOrder);
                
                orderModal.hide();
               
            });
        });