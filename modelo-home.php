<?php require('config/header.php'); ?>
<main id="home">
    <!-- menu -->
    <?php require('components/menu.php'); ?>
    <!-- modulo-1 -->
    <?php require('components/modulo-1.php'); ?>
    <!-- modulo-2 -->
    <?php require('components/modulo-2.php'); ?>
    <!-- modulo-3 -->
    <?php require('components/modulo-3.php'); ?>
    <!-- modulo-4 -->
    <?php require('components/modulo-4.php'); ?>
    <!-- modulo-5 -->
    <?php require('components/modulo-5.php'); ?>
    <!-- modulo-experimente -->
    <?php require('components/modulo-experimente.php'); ?>
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