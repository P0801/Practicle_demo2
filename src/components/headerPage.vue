<template>
    <div>
        <subHeader />
        <nav>
            <div class="row">
                <div class="col pl-5">
                    <img src="../assets/nike-logo.jpg" height="50px" width="100px" />
                </div>
                <div class="col-6 text-center">
                    <span>New & Featured</span>
                    <span>Men</span>
                    <span>Women</span>
                    <span>Kids</span>
                    <span>Sale</span>
                    <span>SNKRS</span>
                </div>
                <div class="col-3">
                    <form class="form-inline">
                        <span></span>
                        <input class="form-control mr-sm-2 searchbox" type="search" placeholder="Search"
                            aria-label="Search">

                        <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
                    </form>
                </div>
            </div>
        </nav>


    </div>
</template>

<script>
import subHeader from './subHeader.vue';
export default {
    name: 'headerPage',
    components: {
        subHeader,
    }
}
</script>

<style scoped>
.row {
    height: 100px;
    padding: 10px;
}

.searchbox {
    border-radius: 20px;
}

span {
    margin: 0 10px;
    font-weight: bold;
    font-size: large;
}
</style>