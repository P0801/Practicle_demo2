<template>
    <div>

        <md-dialog ref="dialog1">
            <md-dialog-title>Login</md-dialog-title>
            <md-dialog-content>
                <p v-if="!validate" style="color:red">Please Enter valid email address and password</p>
                <div class="input-group mb-3">
                    
                    <input type="text" class="form-control" placeholder="Email Address" aria-label="Username"
                        v-model="email" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    
                    <input type="text" class="form-control" placeholder="Password" aria-label="Username"
                      v-model="password"  aria-describedby="basic-addon1">
                </div>

            </md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>
                <md-button class="md-primary" @click="okDialog('dialog1')">Login</md-button>
            </md-dialog-actions>
        </md-dialog>




        <div class="navBar">
            <div class="row">
                <div class="col logo">
                    <img src="../assets/jorder-logo.jpg" height="30px" width="30px" />
                </div>

                <div class="col-9  text-right">
                    <span>Find a Store</span><span>|</span>
                    <span>Help</span><span>|</span>
                    <span>Join Us</span><span>|</span>
                    <span v-if="!$store.state.productStore.user.avatar" @click="openDialog('dialog1')" id="signin">Sign In</span>
                    <span v-else>Sign Out</span>
                    <img height="30px" width="30px" v-if="$store.state.productStore.user.avatar" :src="$store.state.productStore.user.avatar">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'subHeader',
    data() {
        return {
            email: "",
            password: "",
            showDialog: false,
            validate: true,
        }
    },
    methods: {
       async okDialog(){
            if(this.email=="" || this.password == ""){
                this.validate=false
            }
            else{
                 
                await this.$store.dispatch('login',{email:this.email,password: this.password})
                this.getUser();
           
            }
        },
        async getUser(){

            if(this.$store.state.productStore.token && this.$store.state.productStore.token.access_token){
                await this.$store.dispatch('getUser') 
                this.closeDialog('dialog1')
            }
            if(!this.$store.state.productStore.token){
                this.validate = false
            }
        },
             
        openDialog(ref) {
            this.$refs[ref].open();
        },
        closeDialog(ref) {
            this.email="";
            this.password ="";
            this.$refs[ref].close();
        },
        onOpen() {
            console.log('Opened');
        },
        onClose(type) {
            console.log('Closed', type);
        }
    }
}
</script>

<style scoped>
.navBar {
    background-color: #F5F5F5;
    padding: 5px 50px;
}

.row {
    height: 35px;
}

span {
    margin: 0 5px;
    vertical-align: text-top;
}
</style>