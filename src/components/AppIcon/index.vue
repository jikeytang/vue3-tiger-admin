<script lang="ts">
import { h, resolveDynamicComponent, type VNode } from 'vue'

function AppIcon(props: any) {
  const Component = resolveDynamicComponent(props.type)
  return h(Component as VNode)
}

export default AppIcon
</script>
