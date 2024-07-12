// Your code here.
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const progressBars = document.querySelectorAll('.progress-bar');

        progressBars.forEach(bar => {
            bar.addEventListener('mouseover', () => {
                bar.querySelector('.progress').style.backgroundColor = '#ff6347';
            });

            bar.addEventListener('mouseout', () => {
                bar.querySelector('.progress').style.backgroundColor = '#76c7c0';
            });
        });
    });
</script>
