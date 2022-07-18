<script>
export default {
    props: {
        modelValue: {type: String, default: ""},
    },
    emits: ["submit","update:modelValue"],
    methods: {
        updateModelValue(e){
            this.$emit("update.modelValue",e.target.value);
        },
        submit(){
            this.$emit("submit");
        },
    },
};
</script>

<template>
    <div class="imput-group">
        <input
            type="text"
            class="form-control"
            placeholder="Nhap thong tin can tim"
            :value="modelValue"
            @input="updateModelValue"
            @keyup.enter="submit"
        />
        <div class="input-group-append">
            <button
                class="btn btn-outline-secondary"
                type="button"
                @click="submit"
            >
                <i class="fas fa-search"> Tim Kiem</i>
            </button>
        </div>
    </div>
</template>