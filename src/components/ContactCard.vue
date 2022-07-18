<script>
export default {
    props: {
        contact: {type: Object, required: true},
    },
};
<template>
    <div class="p-1">
        <strong>Ten:</strong>
        {{ contact.name }}
    </div>
     <div class="p-1">
        <strong>E-mail:</strong>
        {{ contact.email }}
    </div>
    <div class="p-1">
        <strong>Dia Chi:</strong>
        {{ contact.address }}
    </div>
    <div class="p-1">
        <strong>Dien Thoai:</strong>
        {{ contact.phone }}
    </div>
    <div class="p-1">
        <strong>Lien he yeu thich:&nbsp;</strong>
        <i v-if="contact.favorite" class="fas fa-check"></i>
        <i v-else class="fas fa-times"></i>
    </div>
</template>
</script>