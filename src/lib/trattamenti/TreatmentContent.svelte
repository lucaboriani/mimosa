<script>
    export let classes
</script>
<div class="overflow-y-scroll {classes ? classes : ''}">
    <slot></slot>
</div>