<template>
    <div v-if="showPopup" class="newsletter-popup">
        <div class="popup-content">
            <!-- Left: Image Section -->
            <div class="popup-image">
                <!-- Placeholder for the image -->
                <img src="https://via.placeholder.com/300x400" alt="Newsletter" />
            </div>

            <!-- Right: Message and Form Section -->
            <div class="popup-message">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Get the latest updates and offers directly to your inbox!</p>
                <input type="email" v-model="email" placeholder="Enter your email" />
                <button @click="subscribe">Subscribe</button>
                <button class="close-btn" @click="closePopup">X</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewsletterPopup",
    data() {
        return {
            showPopup: false,
            email: "",
        };
    },
    methods: {
        closePopup() {
            this.showPopup = false;
        },
        subscribe() {
            if (this.email.trim()) {
                alert(`Subscribed with: ${this.email}`);
                this.closePopup();
            } else {
                alert("Please enter a valid email address.");
            }
        },
    },
    mounted() {
        setTimeout(() => {
            this.showPopup = true;
        }, 1000);
    },
};
</script>

<style scoped>
/* Popup Overlay */
.newsletter-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

/* Popup Content */
.popup-content {
    display: flex;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    width: 100%;
    overflow: hidden;
}

/* Left: Image Section */
.popup-image {
    flex: 1;
    background-color: #f3f3f3;
    /* Optional background for fallback */
}

.popup-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Right: Message and Form Section */
.popup-message {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.popup-message h2 {
    margin: 0 0 10px;
}

.popup-message p {
    margin: 0 0 20px;
}

.popup-message input {
    padding: 10px;
    width: 80%;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.popup-message button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: purple;
    color: white;
    transition: background-color 0.3s;
}

.popup-message button:hover {
    background-color: darkpurple;
}

.close-btn {
    margin-top: 10px;
    background-color: red;
    color: white;
    font-size: 14px;
}

.close-btn:hover {
    background-color: darkred;
}

/* Responsive Design */
@media (max-width: 768px) {
    .popup-content {
        flex-direction: column;
        max-width: 90%;
    }

    .popup-image {
        height: 200px;
    }

    .popup-message input {
        width: 100%;
    }
}
</style>
