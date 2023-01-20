<?php require('config/header.php'); ?>
<main id="blog">
    <!-- menu -->
    <?php require('components/menu.php'); ?>
    <!-- modulo-header_blog -->
    <?php require('components/modulo-header_blog.php'); ?>
    <!-- modulo-15 -->
    <?php require('components/modulo-15.php'); ?>
    <!-- modulo-16 -->
    <?php require('components/modulo-16.php'); ?>
    <!-- rodape -->
    <?php require('components/rodape.php'); ?>
</main>
<?php require('config/footer.php'); ?>
<script>
    AOS.init({
        once: true,
        duration: 600,
    });
</script>