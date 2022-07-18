<template>
    <div class="page-row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
    </div>
    <div class="mt-3 col-md-6">
        <h4>
            Danh ba
            <i class="fas fa-address-book"></i>
        </h4>
        <ContactList
            v-if="filteredContactsCount>0"
            :contact="filteredContacts"
            v-model:activeIndex="activeIndex"
        />
        <p v-else> Khong co lien he nao</p>
        <div class="mt-3 row justify-content-around align-items-center">
            <button class="btn btn-sm btn-primary" @click="refreshList()">
                <i class="fas fa-redo"></i>Lam moi
            </button>
            <button class="btn btn-sm btn-success" @click="goToAddContact">
                <i class="fas fa-plus"></i>Them Moi
            </button>
            <button class="btn btn-sm btn-danger"
                @click="removeAllContact" >
                    <i class="fas fa-trash"></i>Xoa Tat ca
            </button>
        </div>
    </div>
    <div class="mt-3 col-md-6">
        <div v-if="activeContact">
            <h4>
                Lien he chi tiet
                <i class="fas fa-address-card"></i>
            </h4>
            <ContactCard :contact="activeContact"/>
        </div>
    </div>
</template>
<script>
import ContactCard from "@/components/ContactCard.vue";
import ContactList from "@/components/ContactList.vue";
import InputSearch from "@/components/ContactSearch.vue";
import ContactService from "@/server/contact.server";

export default {
    components: {
        ContactCard,
        InputSearch,
        ContactList
    },
    data() {
        return {
            contacts: [],
            activeIndex:-1,
            searchText:"",
        };
    },
    watch: {
        searchText(){
            this.activeIndex=-1;
        },
    },
    computed: {
        contactString(){
            return this.contacts.map((contact)=>{
                const {name,email,address,phone}=contact;
                return [name,email,address,phone].join("");
            });
        },
        filteredContacts(){
            if(!this.searchText) return this.contacts;
            return this.contacts.filter((_contact,index)=>
            this.contactString[index].includes(this.searchText));
        },
        activeContact(){
            if(this.activeIndex<0) return null;
            return this.filteredContacts[this.activeIndex];
        },
        filteredContactsCount(){
            return this.filteredContacts.length;
        },
    },
    methods: {
        async retrieveContact(){
            try{
                this.contacts= await ContactService.getAll();
            }catch(error){
                console.log(error);
            }
        },
        refreshList(){
            this.retrieveContact();
            this.activeIndex=-1;
        },
        async removeAllContact(){
            if(confirm("Ban muon xoa tat ca lien he")){
                try{
                    await ContactService.deleteAll();
                    this.refreshList();
                }catch(error)
                {console.log(error);}
            }
        },
        goToAllContact(){
            this.$route.push({name:"contact.add"});
        },
    },
    mounted(){
        this.refreshList();
    }
};
</script>
<style scoped>
    .page{
        text-align: left;
        max-width: 750px;
    }
</style>